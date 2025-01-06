import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  subject,
  message
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h1>From : {email}</h1>
    <h1>{subject} <br /> {message}</h1>
  </div>
);

export default EmailTemplate;
