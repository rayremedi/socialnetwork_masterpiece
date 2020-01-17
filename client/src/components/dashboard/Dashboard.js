import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Tableau de bord</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>Bienvenue {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions/>
          <Experience experience={profile.experience}/>
          <Education education={profile.education}/>
          <div className="my-2">
            <button className="btn btn-danger" onClick={()=> deleteAccount()}>
              <i className="fas fa-user-minus"></i> Supprimer mon compte
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment><p>Vous n'avez pas défini de profil, veuillez ajouter quelques informations</p>
        <Link to='/create-profile' className='btn btn-primary my-1'>
            Créer votre profil
        </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
