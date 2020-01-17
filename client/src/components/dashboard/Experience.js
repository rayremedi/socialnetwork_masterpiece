import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Experience = ({ experience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'Maintenant'
        ) : (
          <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger'>Supprimer</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Mes Expériences</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Entreprise</th>
            <th className='hide-sm'>Titre</th>
            <th className='hide-sm'>Années</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
    experience:PropTypes.array.isRequired
};

export default Experience;
