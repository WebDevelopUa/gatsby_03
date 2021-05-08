import React from 'react'
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
} from 'react-icons/fa'

const SocialLinks = ({ styleClass }) => (
  <ul className={styleClass}>
    <li>
      <a
        href="https://www.fb.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <FaFacebookSquare className="social-icon facebook-icon" />
      </a>
    </li>
    <li>
      <a
        href="https://dribbble.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <FaDribbbleSquare className="social-icon dribble-icon" />
      </a>
    </li>
    <li>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <FaTwitterSquare className="social-icon twitter-icon" />
      </a>
    </li>
  </ul>
)

export default SocialLinks
