// import React, { useState } from 'react';
// import { Input, Form } from 'antd';
// import { MailFilled } from '@ant-design/icons';

// const CustomInput = () => {
//   const [email, setEmail] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleEmailValidation = (rule, value, callback) => {
//     if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       callback('Please enter a valid email address');
//     } else {
//       callback();
//     }
//   };

//   return (
//     <Form.Item
//       name="email"
//       rules={[
//         { required: true, message: 'Please input your email!' },
//         { validator: handleEmailValidation }
//       ]}
//     >
//       <Input
//         prefix={<MailFilled style={{ color: 'rgba(0,0,0,.25)' }} className=' text-xl ' />}
//         placeholder="Email"
//         value={email}
//         onChange={handleEmailChange}
//       />
//     </Form.Item>
//   );
// };

// export default CustomInput;

// import React, { useState } from 'react';
// import { Input, Form } from 'antd';
// import { MailFilled } from '@ant-design/icons';

// const CustomInput = ({ initialValue = '', onChange }) => {
//   const [value, setValue] = useState(initialValue);

//   const handleInputChange = (e) => {
//     const newValue = e.target.value;
//     setValue(newValue);
//     if (onChange) {
//       onChange(newValue);
//     }
//   };

//   const handleEmailValidation = (rule, value, callback) => {
//     if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
//       callback('Please enter a valid email address');
//     } else {
//       callback();
//     }
//   };

//   return (
//     <Form.Item
//       name="email"
//       rules={[
//         { required: true, message: 'Please input your email!' },
//         { validator: handleEmailValidation }
//       ]}
//     >
//       <Input
//         prefix={<MailFilled style={{ color: 'rgba(0,0,0,.25)' }} className=' text-xl ' />}
//         placeholder="Email"
//         value={value}
//         onChange={handleInputChange}
//       />
//     </Form.Item>
//   );
// };

// export default CustomInput;

// import React, { useState } from 'react';
// import { Input, Form } from 'antd';
// import { MailFilled, LockFilled, PhoneFilled, EnvironmentFilled, FileTextFilled } from '@ant-design/icons';

// const CustomInput = ({ type = 'text', initialValue = '', onChange }) => {
//   const [value, setValue] = useState(initialValue);

//   const handleInputChange = (e) => {
//     const newValue = e.target.value;
//     setValue(newValue);
//     if (onChange) {
//       onChange(newValue);
//     }
//   };

//   const getIconAndPlaceholder = () => {
//     switch (type) {
//       case 'password':
//         return { icon: <LockFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Password' };
//       case 'email':
//         return { icon: <MailFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Email' };
//       case 'phone':
//         return { icon: <PhoneFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Phone' };
//       case 'address':
//         return { icon: <EnvironmentFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Address', validation: { type: 'string', message: 'Please input your address!' } };
//       case 'details':
//         return { icon: <FileTextFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Details', validation: { type: 'string', message: 'Please input some details!' } };
//       default:
//         return { icon: null, placeholder: 'Input' };
//     }
//   };

//   const { icon, placeholder, validation } = getIconAndPlaceholder();

//   return (
//     <Form.Item
//       name="input"
//       rules={[
//         { required: true, message: `Please input your ${placeholder.toLowerCase()}!` },
//         validation ? { type: validation.type, message: validation.message } : null
//       ].filter(rule => rule !== null)}
//     >
//       <Input
//         type={type}
//         prefix={icon}
//         placeholder={placeholder}
//         value={value}
//         onChange={handleInputChange}
//       />
//     </Form.Item>
//   );
// };

// export default CustomInput;
import React, { useState } from 'react';
import { Input, Form } from 'antd';
import { MailFilled, LockFilled, PhoneFilled, EnvironmentFilled, FileTextFilled } from '@ant-design/icons';

const CustomInput = ({ type = 'text', value: propValue = '', onChange }) => {
  const [value, setValue] = useState(propValue);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const getIconAndPlaceholder = () => {
    switch (type) {
      case 'password':
        return { icon: <LockFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Password' };
      case 'email':
        return { icon: <MailFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Email', validation: { type: 'email', message: 'Please input a valid email address!' } };
      case 'phone':
        return { icon: <PhoneFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Phone', validation: { customValidator: validatePhoneNumber, message: 'Please input a valid phone number!' } };
      case 'address':
        return { icon: <EnvironmentFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Address', validation: { customValidator: validateAddress, message: 'Please input a valid address!' } };
      case 'details':
        return { icon: <FileTextFilled style={{ color: 'rgba(0,0,0,.25)' }} className='text-xl' />, placeholder: 'Details', validation: { customValidator: validateDetails, message: 'Details should be at least 10 characters long!' } };
      default:
        return { icon: null, placeholder: 'Input' };
    }
  };

  const { icon, placeholder, validation } = getIconAndPlaceholder();

  const validateField = (rule, value, callback) => {
    if (validation && validation.customValidator) {
      const isValid = validation.customValidator(value);
      if (!isValid) {
        callback(validation.message);
      } else {
        callback();
      }
    } else {
      callback();
    }
  };

  return (
    <Form.Item
      name="input"
      rules={[
        { required: true, message: `Please input your ${placeholder.toLowerCase()}!` },
        validation ? { validator: validateField } : null
      ].filter(rule => rule !== null)}
    >
      <Input
        type={type}
        prefix={icon}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </Form.Item>
  );
};

// Custom validation functions
const validatePhoneNumber = (phoneNumber) => {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phoneNumber);
};

const validateAddress = (address) => {
  return address.trim() !== '';
};

const validateDetails = (details) => {
  return details.length >= 10;
};

export default CustomInput;
