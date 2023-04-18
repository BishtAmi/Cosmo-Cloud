import React, { useState } from "react";
// import "react-crud-icons/dist/react-crud-icons.css";
const FieldType = {
  STRING: "string",
  NUMBER: "number",
  BOOLEAN: "boolean",
  OBJECT: "object",
};
const App = () => {
  const [fields, setFields] = useState([]);

  // Function to handle field name change
  const handleFieldNameChange = (index, newName) => {
    const updatedFields = [...fields];
    updatedFields[index].name = newName;
    setFields(updatedFields);
  };

  // Function to handle field type change
  const handleFieldTypeChange = (index, newType) => {
    const updatedFields = [...fields];
    updatedFields[index].type = newType;
    if (newType === FieldType.OBJECT) {
      updatedFields[index].fields = [];
    }
    setFields(updatedFields);
  };

  // Function to handle adding a new field
  const handleAddField = () => {
    setFields([...fields, { name: "", type: FieldType.STRING }]);
  };
  // Function to handle deleting a field
  const handleDeleteField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  // Function to handle adding a nested field for object type
  const handleAddNestedField = (index) => {
    const updatedFields = [...fields];
    updatedFields[index].fields.push({ name: "", type: FieldType.STRING });
    setFields(updatedFields);
  };

  // Function to handle saving the updated data
  const handleSave = () => {
    console.log("Updated data:", fields);
  };

  return (
    <div className="appnew">
      <h1>User Interface</h1>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.name}
            onChange={(e) => handleFieldNameChange(index, e.target.value)}
          />
          <select
            value={field.type}
            onChange={(e) => handleFieldTypeChange(index, e.target.value)}
          >
            <option value={FieldType.STRING}>String</option>
            <option value={FieldType.NUMBER}>Number</option>
            <option value={FieldType.BOOLEAN}>Boolean</option>
            <option value={FieldType.OBJECT}>Object</option>
          </select>
          {field.type === FieldType.OBJECT && (
            <button onClick={() => handleAddNestedField(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              Add Nested Field
            </button>
          )}
          {/* delete */}
          <button onClick={() => handleDeleteField(index)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>
            delete
          </button>
        </div>
      ))}
      {/* ADD */}
      <button onClick={handleAddField}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Add
      </button>
      {/* save */}
      <button onClick={handleSave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-download"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        Save
      </button>
    </div>
  );
};

export default App;
