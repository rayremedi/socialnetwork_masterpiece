import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'Maintenant'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button className='btn btn-danger'>Supprimer</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Ma Scolarité</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Ecole</th>
            <th className='hide-sm'>Diplôme</th>
            <th className='hide-sm'>Années</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
    education:PropTypes.array.isRequired
};

export default Education;

