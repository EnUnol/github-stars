
import React from 'react'
import { FaStar } from 'react-icons/fa'

const RepoItem = ({ repo }) => {
  return (
    <div className="repo">
      <div className="repo-header">
        <div className="repo-info">
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
        </div>
      </div>
      <div className="repo-footer">
        <div className="owner-info">
          <img src={repo.owner.avatar_url} alt="avatar" className="avatar" />
          <span>{repo.owner.login}</span>
        </div>
        <div className="stars">
          <FaStar color="#f5b301" />
          <span>{repo.stargazers_count}</span>
        </div>
      </div>
    </div>
  )
}

export default RepoItem
