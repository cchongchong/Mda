import React, {PropTypes} from 'react';
import {get} from 'lodash';
import ItemEditor from './ItemEditor';

const ArraySectionEditor = ({fieldNamePrefix, section, data, onChange}) => {
  const currentFieldNamePrefix = fieldNamePrefix
    ? fieldNamePrefix + "." + section.Name
    : section.Name;
  const list = get(data, currentFieldNamePrefix);
  const add = () => {
    const nextIndex = list
      ? list.length
      : 0;
    const itemNamePrefix = currentFieldNamePrefix + "[" + nextIndex + "].";
    let changes = [];
    section
      .Items
      .map(item => changes.push({
        name: itemNamePrefix + item.Name,
        value: null
      }));
    onChange(changes);
  };
  const remove=(index)=>{
    let changes = [];
    changes.push({name:currentFieldNamePrefix,deleteIndex:index});
    onChange(changes);
  };
  return (
    <fieldset>
      <legend>{section.DisplayName}</legend>
      <p>{section.Description}</p>
      {list && list.length > 0 && section.Items && section.Items.length > 0
        ? list.map((value, index) => {
          const removeLine=()=>{
            remove(index);
          };
          return (
            <div className="panel panel-default" key={index}>
              <div className="panel-body">
                {section
                  .Items
                  .map(item => <div key={item.Name + index}><ItemEditor
                    fieldNamePrefix={currentFieldNamePrefix + "[" + index + "]"}
                    item={item}
                    data={data}
                    onChange={onChange}/></div>)}
                <button type="button" className="btn btn-default btn-sm" onClick={removeLine}>
                  <span className="glyphicon glyphicon-minus"></span>
                  Remove
                </button>
              </div>
            </div>
          );
        })
        : ""}
      <button type="button" className="btn btn-default btn-sm" onClick={add}>
        <span className="glyphicon glyphicon-plus"></span>
        Add
      </button>
    </fieldset>
  );
};

ArraySectionEditor.propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
  section: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default ArraySectionEditor;
