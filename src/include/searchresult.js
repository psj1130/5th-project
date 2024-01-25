import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useParams, Link as RouterLink } from 'react-router-dom';
import './searchresult.css';
import { Link } from 'react-router-dom';

function SearchComponent() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const { keyword } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/search/${keyword}`);
        setSearchResults(response.data.htmlItems);
      } catch (error) {
        console.error('검색 결과를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [keyword]);

  const columns = [
    { field: 'id', headerName: '게시물번호', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'title', headerName: '제목', width: 110, headerAlign: 'center', align: 'center' },
    { field: 'content', headerName: '내용', width: 550, headerAlign: 'center', align: 'center' },
    { field: 'author', headerName: '작성자', width: 90, headerAlign: 'center', align: 'center' },
    {
      field: 'createdAt',
      headerName: '작성날짜',
      width: 200,
      headerAlign: 'center',
      align: 'center',
      valueGetter: (params) => {
        const createdAt = params.row.createdAt;
        if (createdAt !== undefined && createdAt !== null) {
          const dateObject = new Date(createdAt);
          if (!isNaN(dateObject.getTime())) {
            return dateObject.toLocaleDateString('ko-KR', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit', // 분까지 표시하도록 추가
            });
          } else {
            return `날짜 형식이 잘못되었습니다: ${createdAt}`;
          }
        } else {
          return '날짜가 없거나 유효하지 않습니다';
        }
      },
    },
    {
      field: 'img_url',
      headerName: '사진',
      width: 200,
      editable: false,
      headerAlign: 'center',
      renderCell: (params) => {
        let imgUrl = params.row.img_url;
        return (
          <>
            <div className='notice-img-box'>
              <img
                className='notice-img'
                src={params.row.img_url}
              />
            </div>
          </>
        );
      },
    },
    { field: 'views', headerName: '조회수', width: 70, align: 'center' },
  ];

  return (
    <div id='searchresult_main'>
      {searchResults.length > 0 && (
        <Typography variant="h5" component="div" id="searchresult_title">
          검색 결과
        </Typography>
      )}
      <div id="searchresult_container">
        <Link to={`/htmlboard`}>
          <Box>
            {searchResults.length > 0 ? (
              <DataGrid
                rows={searchResults}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                selectionModel={[selectedRow]}
              />
            ) : (
              null
            )}
          </Box>
        </Link>
      </div>
    </div>
  );
}

export default SearchComponent;
