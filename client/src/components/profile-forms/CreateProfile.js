import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    createProfile(formData, history);
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Créer Votre Profil</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Taper quelques infos pour que votre
        profil se démarque
      </p>
      <small>* = champs requis</small>
      <form className='form' onSubmit={e=> onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Sélectionnez une profession</option>
            <option value='Developpeur'>Développeur</option>
            <option value='Developpeur Junior'> Développeur Junior </option>
            <option value='Developpeur Senior'>Développeur Senior </option>
            <option value='Manageur'>Manageur</option>
            <option value='Etudiant ou Apprenant'>Apprenant</option>
            <option value='Instructeur'>Instructeur ou professeur</option>
            <option value='Interne'>Interne</option>
            <option value='Autres'>Autres</option>
          </select>
          <small className='form-text'>
            Votre post actuel
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Entreprise'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            L'entreprise pour laquelle vous travaillez
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Site web'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Site Web de l'entreprise pour laquelle vous travaillez ou portfolio personnel
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Localisation'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Ville actuelle (ex. Paris, FR)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Compétences'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Veuillez utiliser des valeurs séparées par des virgules (ex.
            HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder="Nom d'utilisateur Github"
            name='githubusername'
            value={githubusername}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Si vous souhaitez montrer vos derniers repos  Github, incluer
            votre nom d'utilisateur Github
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Une courte biographie sur vous-même'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>Parlez-nous un peu de vous(passions,motivations etc...)</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Liens des réseaux sociaux
          </button>
          <span>Optionel</span>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Retour
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default  connect(null, {createProfile})(withRouter(CreateProfile));
