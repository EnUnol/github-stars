import React from 'react'
import RepoItem from './RepoItem'

const ReposListResult = ({ repos, loading, onScroll }) => {
  return (
    <div id="scroll-box" className="scroll-box" onScroll={onScroll}>
      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
    </div>
  )
}

export default ReposListResult
