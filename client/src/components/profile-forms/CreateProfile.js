import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
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

  return (
    <Fragment>
      <h1 className='large text-primary'>Créer Votre Profil</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Taper quelques infos pour que votre
        profil se démarque
      </p>
      <small>* = champs requis</small>
      <form className='form'>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Sélectionnez une profession</option>
            <option value='Developer'>Developpeur</option>
            <option value='Junior Developer'> Developpeur Junior </option>
            <option value='Senior Developer'>Developpeur Senior </option>
            <option value='Manager'>Manageur</option>
            <option value='Student or Learning'>Apprenant</option>
            <option value='Instructor'>Instructeur ou professeur</option>
            <option value='Intern'>Interne</option>
            <option value='Other'>Autres</option>
          </select>
          <small className='form-text'>
            Donnez-nous une idée de où vous en êtes dans votre carrière
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
            Votre propre entreprise ou celle pour laquelle vous travaillez
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
            Peut être la vôtre ou un site Web d'entreprise
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
            Ville & etat suggérés (ex. Paris, FR)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Compétences'
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
            Si vous souhaitez votre dernier repos et un lien Github, incluez
            votre Nom d'utilisateur
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Une courte biographie sur vous-même'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text'>Parle-nous un peu de toi</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Ajouter des liens de réseaux sociaux
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
        <a className='btn btn-light my-1' href='dashboard.html'>
          Retour
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
