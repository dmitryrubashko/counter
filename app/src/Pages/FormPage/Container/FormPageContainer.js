import {useState, useCallback} from "react";
import Form from "../Components/Form";

const FormPageContainer = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isFormPrinted, setFormPrinted] = useState(false);

  const onFormChange = useCallback((event) => {
    const {value, name} = event.target;
    setFormData({...formData,  [name]: value})
    }, [formData])

  const handleFormPrint = useCallback((event) => {
    event.preventDefault();
    setFormPrinted(true)
  }, [])
  return (
    <>
      <h1>Form Page</h1>

      <Form
        formData={formData}
        onFormChange={onFormChange}
        onSubmit={handleFormPrint}
      />

      {isFormPrinted && (
        <div>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
        </div>
      )}
    </>
  );
};

export default FormPageContainer;
