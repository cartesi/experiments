import React, { useState } from 'react';
import Button from './ui/Button';
import { Input } from './ui/Input';
import _emailValidator from 'email-validator';

type NewsletterProps = {
  content: {
    description: string;
    buttonLabel: string;
  };
};

const Newsletter = ({ content }: NewsletterProps) => {
  const [message, setMessage] = useState<string>('');

  const convertListFields = fields => {
    var queryParams = '';

    for (var field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        var fieldTransformed =
          field.substring(0, 6) === 'group[' ? field : field.toUpperCase();
        queryParams = queryParams.concat(
          '&'.concat(fieldTransformed, '=').concat(fields[field])
        );
      }
    }

    return queryParams;
  };

  const subscribeEmailToMailchimp = async _ref => {
    try {
      const response = await fetch(_ref.url, { mode: 'no-cors' });
      if (response)
        return {
          result: 'success',
          msg: 'Successfully subscribed. Thank you!',
        };
    } catch (error) {
      console.error(error.message);
      return {
        result: 'error',
        msg: 'Something went wrong. Try again later.',
      };
    }
  };

  const addToMailchimp = async (email, fields): Promise<any> => {
    var isEmailValid = (0, _emailValidator.validate)(email);
    var emailEncoded = encodeURIComponent(email);

    if (!isEmailValid) {
      return Promise.resolve({
        result: 'error',
        msg: 'The email you entered is not valid.',
      });
    }

    const endpoint =
      'https://cartesi.us10.list-manage.com/subscribe/post-json?u=4323f5f98e029b3d9d2dd4738&amp;id=26295bac31&amp;f_id=00bc45e4f0';
    const timeout = 3500;

    var queryParams = '&EMAIL='
      .concat(emailEncoded)
      .concat(convertListFields(fields));
    const url = ''.concat(endpoint).concat(queryParams);
    return subscribeEmailToMailchimp({
      url: url,
      timeout: timeout,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const result = await addToMailchimp(event.target.elements.email.value, {
        tags: '14166733',
      });
      if (result) setMessage(result.msg);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <p className='font-light opacity-70 text-base py-0 my-0'>
        {!message ? content.description : message}
      </p>
      {!message && (
        <form className='ml-block-form' onSubmit={handleSubmit}>
          <div className='flex items-center gap-2'>
            <Input
              type='email'
              id='email'
              className='rounded px-4 py-2 border-background text-foreground focus:border-accent '
              data-inputmask=''
              placeholder='Email'
              autoComplete='email'
              required
            />
            <Button
              type='submit'
              variant={'outline-invert'}
              size='lg'
              className='px-4 py-3 rounded'
            >
              {content.buttonLabel}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
