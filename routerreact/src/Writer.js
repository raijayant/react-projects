import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

export default ({ match: {url}, name, born, deceased, description, image, writer }) =>
<Fragment>

    <img src={image} alt={name} />
    <h1>
    {name}
    </h1>

    <h3>
    {born} &mdash: {deceased}
    </h3>

    <p1>
    {description}
    </p1>

    <ul>
    {texts.map(({ id, title }) =>
        <li>
        <Link to={`${url}/texts/${id}`}>
        {title}
        </Link>
        </li>
    )}
    </ul>

</Fragment>