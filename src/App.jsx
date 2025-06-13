import React, { useEffect, useState } from 'react'
import ReposListResult from './components/ReposListResult'
import { fetchTrendingRepos } from './api/apiController'
import { renderPagination } from './components/paginationConfig'
import BottomNavBar from './components/BottomNavBar'

const App = () => {
  //Define App State
  const [repos, setRepos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)

  //Call API
  const fetchRepos = async (pageNum = 1) => {
    if (loading) return;
    setLoading(true);
    try {
      const data = await fetchTrendingRepos(pageNum)
      setRepos(data.items)
      setTotalPages(Math.min(34, Math.ceil(data.total_count / 30)))
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  //Component state management
  useEffect(() => {
    fetchRepos(page)
  }, [page])

  const handlePageClick = (num) => {
    setPage(num)
  }

  //Page Rendering
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div className="header-row">
        <h2 className="header-title">Top Trending Github Repos (Last 10 Days)</h2>
      </div>

       <ReposListResult repos={Array.isArray(repos) ? repos : []} loading={loading} />

      <div style={{ marginTop: '15px' }}>
        {renderPagination({ page, totalPages, loading, handlePageClick })}
      </div>
      <BottomNavBar />
    </div>
  )
}

export default App
