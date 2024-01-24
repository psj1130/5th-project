import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { DataGrid } from '@mui/x-data-grid';
import { API_URL } from '../config/serverurl';
import { styled } from '@mui/system';
import { getCookie } from '../customer/cookies';
import { Box, Typography, TextField, TextareaAutosize, Button, Container, TableContainer, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import './htmlboard.css';
import './board.css';
import Htmlreview_p from './htmlreview_p';
const scrollStyle = {
  overflowY: 'scroll',
};

// 모달의 스타일을 적용할 컴포넌트 생성
const ModalWrapper = styled(Dialog)``;

const htmlboard = async (id) => {
  const res = await axios.get(`${API_URL}/htmlreview/${id}`);
  console.log(res);
  return res.data;
}

function Htmlreview(props) {
  console.log("props.id: ", props.id);
  const [selectedRow, setSelectedRow] = useState(null); // 선택한 행의 데이터 상태
  const [showModal, setShowModal] = useState(false); // 모달 열림 상태
  const [editedTitle, setEditedTitle] = useState(''); // 수정된 제목 상태
  const [editedContent, setEditedContent] = useState(''); // 수정된 내용 상태
  const [editMode, setEditMode] = useState(false);
  const cookie = getCookie('loginCookie');
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [columns, setColumns] = useState([
    { field: 'id', headerName: '댓글 번호', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'title', headerName: '제목', width: 120, headerAlign: 'center', align: 'center' },
    { field: 'content', headerName: '내용', width: 460, headerAlign: 'center', align: 'center' },
    { field: 'author', headerName: '작성자', width: 120, headerAlign: 'center', align: 'center' },
    { field: 'created_at', headerName: '작성날짜', width: 180, headerAlign: 'center', align: 'center' },
    {
      field: 'edit',
      headerName: '수정',
      headerAlign: 'center',
      width: 110,
      renderCell: (params) => {
        return (
          <>
            <IconButton
              onClick={() => {
                if (cookie) {
                  handleEdit(params);
                } else {
                  alert('로그인 후 이용해주세요 !');
                  navigate('/members/login');
                }
              }}
            >
              <EditIcon style={{ color: 'black' }} />
            </IconButton>
          </>
        );
      },
    },
  ]);

  useEffect(() => {
    if (windowWidth <= 767) {
      setColumns((prevColumns) =>
        prevColumns.filter((col) => col.field !== 'author')
      );
      // 480px ~ 767px 범위에서 edit 필드를 포함한 컬럼 추가
      if (!columns.find((col) => col.field === 'edit')) {
        setColumns((prevColumns) => [...prevColumns, { field: 'edit', headerName: '수정', headerAlign: 'center', width: 120 }]);
      }
    } else if (windowWidth <= 1023) {
      setColumns((prevColumns) => prevColumns.filter((col) => col.field !== 'img_url'));
    }
  }, [windowWidth]);


  const { id } = useParams();
  const [state] = useAsync(() => htmlboard(props.id), [props.id]);
  const { loading, data: rdata, error } = state;
  console.log(rdata);

  useEffect(() => {
    if (selectedRow) {
      setEditedTitle(selectedRow.title);
      setEditedContent(selectedRow.content);
      // setupdateImg(selectedRow.img_url);
    }
  }, [selectedRow]);

  const handleRowClick = async (row) => {
    setSelectedRow(row);
    setShowModal(true);
    // setEditMode(false); // 주석 처리
    try {
      await axios.patch(`${API_URL}/html/increase-views/${row.id}`);
    } catch (error) {
      console.error('Error updating views:', error);
    }
  };
  // const handleRowClick = (row) => {
  //   setSelectedRow(row); // 선택한 행의 데이터를 상태에 저장
  //   setShowModal(true); // 모달 창 열기
  // };

  const handleEdit = (params) => {
    console.log('handleEdit called');
    setSelectedRow(params.row);
    setShowModal(true);
    setEditMode(true); // Enable edit mode when edit icon is clicked
    console.log('EditMode set to true');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        title: editedTitle,
        content: editedContent,
      };

      await axios.patch(`${API_URL}/htmlreview/update/${selectedRow.id}`, data);
      console.log("보냄");
      setEditMode(false); // Add this line to disable edit mode after submit
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!rdata) return null;

  return (
    <div className="sell">
      <Toolbar>
        <Htmlreview_p id={props.id} />
        {/* <  type='click' className='writeButton' onClick={() => {
          if (cookie) {
            navigate(`/htmlreview_p/?id=${props.id}`);
          } else if (!cookie) {
            alert('로그인 후 이용해주세요 !');
            navigate('/members/login');
          }
        }}> 글 작성 </button> */}
      </Toolbar>

      <DataGrid
        className='board_datagrid_container2'
        rows={rdata.map((a) => ({
          id: a.id,
          title: a.title,
          content: a.content,
          author: a.author,
          img_url: a.img_url,
          views: a.views,
          created_at: new Date(a.createdAt).toLocaleDateString('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
          }),
        }))}
        columns={columns}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        onRowClick={(row) => handleRowClick(row.row)}
        checkboxSelection={false}
      />

      {/* 모달 */}
      <ModalWrapper open={showModal}
        maxWidth="xl" maxHeight='90vh'

        onClose={() => setShowModal(false)}>
        <Container className="modal-content2">
          <div className="modal-content3">
            <h2>댓글 수정</h2>
            {selectedRow && (
              <>
                {/* 수정 폼 */}
                <form onSubmit={handleSubmit}>
                  {/* 수정할 제목 */}
                  <TextField
                    type="text"
                    label="제목"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                  {/* 수정할 내용 */}
                  <Box sx={{ position: 'relative' }}>
                    <TextareaAutosize
                      id='memo_container3'
                      style={{ ...scrollStyle }}
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      placeholder="수정할 내용"
                      rows={37}
                      minRows={20}
                      className='textarea-autosize'
                    />
                  </Box>
                  {/* 작성자와 작성 날짜 */}
                  <div id="review_num">
                    <Box sx={{ textAlign: 'end', marginTop: '10px' }}>
                      <Typography variant="subtitle2">댓글 번호: {selectedRow.id}</Typography>
                      <Typography variant="subtitle2">작성자: {selectedRow.author}</Typography>
                      <Typography variant="subtitle2">작성 날짜: {selectedRow.created_at}</Typography>
                    </Box>
                  </div>
                </form>

                {/* 모달 수정, 닫기 버튼 */}
                <div id='modal_btn'>
                  {selectedRow && (editMode || !editMode) ? (
                    <>
                      {editMode && cookie && (
                        <>
                          <button
                            id='submit_btn'
                            onClick={async () => {
                              await axios.delete(`${API_URL}/htmlreview/delete/${selectedRow.id}`)
                                .then(res => {
                                  console.log(res.data);
                                  window.location.reload();
                                })
                                .catch(err => {
                                  console.log(err);
                                });
                              navigate('/htmlboard');
                            }}
                          >
                            삭제
                          </button>

                          <button
                            id='submit_btn'
                            className='userListPatch'
                            onClick={async (e) => {
                              if (e) e.preventDefault();
                              navigate('/htmlboard');
                              await handleSubmit(e);
                            }}
                          >
                            수정 완료
                          </button>
                        </>
                      )}
                      <Button
                        variant="outlined"
                        id='outlined_btn'
                        onClick={() => {
                          setShowModal(false);
                          window.location.reload();
                        }}
                      >
                        닫기
                      </Button>
                    </>
                  ) : null}
                </div>
              </>
            )}
          </div>
        </Container>
      </ModalWrapper>
    </div>
  );
}
export default Htmlreview;
