import React, { Fragment, useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Les mots de passe ne correspondent pas');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Inscription</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Crée ton compte
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nom'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Adresse e-mail'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            Ce site utilise Gravatar donc si vous voulez une image de profil,
            utilisez un e-mail Gravatar
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Mot de passe'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Veuillez confirmer votre mot de passe'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Valider' />
      </form>
      <p className='my-1'>
        Vous avez déjà un compte? <a href='login.html'>Connectez vous</a>
      </p>
    </Fragment>
  );
};

export default Register;
