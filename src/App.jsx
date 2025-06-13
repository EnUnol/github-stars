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
  const [useScroll, setUseScroll] = useState(false)

  //Call API
  const fetchRepos = async (pageNum = 1, reset = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const data = await fetchTrendingRepos(pageNum)
      if (reset) {
        setRepos(data.items)
      } else {
        setRepos(prev => [...prev, ...data.items])
      }
      setTotalPages(Math.min(34, Math.ceil(data.total_count / 30)))
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  //Component state management
  useEffect(() => {
    fetchRepos(page, !useScroll)
  }, [page, useScroll])

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('scroll-box')
      if (
        useScroll &&
        container &&
        container.scrollTop + container.clientHeight >= container.scrollHeight - 10 &&
        !loading &&
        page < totalPages
      ) {
        setPage(prev => prev + 1)
      }
    }
    const container = document.getElementById('scroll-box')
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [useScroll, loading, page, totalPages])

  const handlePageClick = (num) => {
    setPage(num)
  }

  //Page Rendering
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif' }}>
      <div className="header-row">
        <h2 className="header-title">Top Trending Github Repos (Last 10 Days)</h2>
        <label className="scroll-toggle">
          <span>Infinite scroll: </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={useScroll}
              onChange={() => {
                setRepos([])
                setPage(1)
                setUseScroll(!useScroll)
              }}
            />
            <span className="slider round"></span>
          </label>
        </label>
      </div>

      <ReposListResult repos={Array.isArray(repos) ? repos : []} loading={loading} />

      {!useScroll && (
        <div style={{ marginTop: '15px' }}>
          {renderPagination({ page, totalPages, loading, handlePageClick })}
        </div>
      )}

      <BottomNavBar />
    </div>
  )
}

export default App
