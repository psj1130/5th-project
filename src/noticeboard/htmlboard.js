import React, { useState, useEffect } from 'react';
import useAsync from '../customHook/useAsync';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import { API_URL } from '../config/serverurl';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { getCookie } from '../player/cookies';
import { Box, Typography, TextField, TextareaAutosize, Button, Container, TableContainer, Toolbar } from '@mui/material';

import './htmlboard.css';
import './noticeboard.css';
import Htmlreview from './htmlreview';
import Boarder from '../include/board';
import SearchComponent from '../include/searchresult';

const ModalWrapper = styled(Dialog)``;

async function htmlboard() {
  const res = await axios.get(`${API_URL}/html`);
  console.log(res);
  return res.data;
}

function Html() {
  const [selectedRow, setSelectedRow] = useState(null); // 선택한 행의 데이터 상태
  const [showModal, setShowModal] = useState(false); // 모달 열림 상태
  const [editedTitle, setEditedTitle] = useState(''); // 수정된 제목 상태
  const [editedContent, setEditedContent] = useState(''); // 수정된 내용 상태
  const [updateImg, setupdateImg] = useState(''); // 수정된 이미지 내용 상태
  const [views, setViews] = useState(''); //수정된 조회수 상태
  const [editMode, setEditMode] = useState(false);

  const cookie = getCookie('loginCookie');
  const navigate = useNavigate();

  const scrollStyle = {
    overflowY: 'scroll',
  };

  const columns = [
    { field: 'id', headerName: '게시물번호', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'title', headerName: '제목', width: 110, headerAlign: 'center', align: 'center' },
    { field: 'content', headerName: '내용', width: 550, headerAlign: 'center', align: 'center' },
    { field: 'author', headerName: '작성자', width: 90, headerAlign: 'center', align: 'center' },
    { field: 'created_at', headerName: '작성날짜', width: 200, headerAlign: 'center', align: 'center' },
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
                onClick={setShowModal}
              />
            </div>
          </>
        );
      },
    },
    { field: 'views', headerName: '조회수', width: 70, align: 'center' },
    {
      field: 'edit',
      headerName: '수정',
      headerAlign: 'center',
      width: 80,
      renderCell: (params) => {
        return (
          <>
            {/* 수정 */}
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
    }
  ];

  const { id } = useParams();
  const [state] = useAsync(() => htmlboard(id), [id]);
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
    setSelectedRow(row); // 선택한 행의 데이터를 상태에 저장
    setShowModal(true); // 모달 창 열기
    try {
      await axios.patch(`${API_URL}/html/increase-views/${row.id}`);
      console.log('행 클릭:', row);
    } catch (error) {
      console.error('Error updating views:', error);
    }
  };
  // const handleRowClick = (row) => {
  //   setSelectedRow(row); // 선택한 행의 데이터를 상태에 저장
  //   setShowModal(true); // 모달 창 열기
  // };
  const handleEdit = (params) => {
    setSelectedRow(params.row);
    setShowModal(true);
    setEditMode(true); // 수정 모드를 true로 설정
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateImg = document.getElementById('file-style').files[0];
    try {
      if (updateImg) {
        const formData = new FormData();
        formData.append('img_url', updateImg);
        const imgUploadRes = await axios.post(`${API_URL}/html/images`, formData);
        const data = {
          title: editedTitle,
          content: editedContent,
          img_url: imgUploadRes.data.path,
        };
        await axios.patch(`${API_URL}/html/update/${selectedRow.id}`, data);
        console.log("보냄");
        window.location.reload();
      } else {
        // 이미지를 업로드하지 않은 경우, img_url을 빈 문자열로 수정
        const data = {
          title: editedTitle,
          content: editedContent,
          img_url: '',
        };
        await axios.patch(`${API_URL}/html/update/${selectedRow.id}`, data);
        console.log("보냄");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!rdata) return null;

  return (
    <div className="sell">
      <div id='SearchComponent_box'>
        <Boarder />
        <SearchComponent />
      </div>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          커뮤니티 게시판
        </Typography>
        <button type='click' className='writeButton' onClick={() => {
          if (cookie) {
            navigate('/htmlboard_p');
          } else if (!cookie) {
            alert('로그인 후 이용해주세요 !');
            navigate('/members/login');
          }
        }}> 글 작성 </button>
      </Toolbar>

      <DataGrid
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
        // rowsPerPageOptions={false}
        disableRowSelectionOnClick // 행을 클릭했을 때 선택되는 기본 동작 비활성화
        onRowClick={(row) => handleRowClick(row.row)}
        checkboxSelection={false} // 기본 체크박스 기능 비활성화
      />
      {/* 모달 */}
      <ModalWrapper id='modal_container' open={showModal} maxWidth="xl" maxHeight='100vh' onClose={() => setShowModal(false)}>
        <Container>
          <div className="modal-content">
            {selectedRow && (
              <>
                {/* 수정 폼 */}
                <form onSubmit={handleSubmit} id='title_container1'>
                  {/* 수정할 제목 */}
                  <div id='title_container2'>
                    <TextField
                      type="text"
                      label="수정할 제목"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <label id='img_container' htmlFor="file-style">
                      {/* <img
                        src={updateImg ? URL.createObjectURL(updateImg) : selectedRow.img_url}
                        alt="게시물 이미지"
                        className="modal-image"
                        id='img_box'
                        style={{ width: '990px', height: '600px' }}
                      /> */}
                      <input
                        id='file-style'
                        className='htmlemodal-img'
                        type="file"
                        name="img_url"
                        onChange={(e) => setupdateImg(e.target.files[0])}
                      />
                    </label>
                  </div>
                  {/* 수정할 내용 */}
                  <div id="border1">
                    <Box id="border1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      {updateImg || selectedRow.img_url ? (
                        <div id='img_container' className='modal-image-container'>
                          <img
                            src={updateImg ? URL.createObjectURL(updateImg) : selectedRow.img_url}
                            alt="게시물 이미지"
                            className="modal-image"
                            style={{ width: '900px', height: 'auto' }}
                          />
                        </div>
                      ) : null}
                      <TextareaAutosize
                        id='memo_container'
                        style={{ ...scrollStyle }}
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        placeholder="수정할 내용"
                        rows={37}
                        minRows={20}
                        className='textarea-autosize'
                      />
                    </Box>
                  </div>
                  {/* 작성자와 작성 날짜 */}
                  <div id='detail_container'>
                    <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
                      {/* <p>게시물번호: {selectedRow.id}</p> */}
                      <Typography variant="subtitle2">게시물 번호: {selectedRow.id}</Typography>
                      <Typography variant="subtitle2">작성자: {selectedRow.author}</Typography>
                      <Typography variant="subtitle2">작성 날짜: {selectedRow.created_at}</Typography>
                    </Box>
                  </div>
                </form>
                {/* 모달 수정, 닫기, 삭제 버튼 */}
                <div id='modal_btn'>
                  {selectedRow && (editMode || !editMode) ? (
                    <>
                      {editMode && cookie && (
                        <>
                          <button
                            id='submit_btn'
                            onClick={async () => {
                              await axios.delete(`${API_URL}/html/delete/${selectedRow.id}`)
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
                <Htmlreview id={selectedRow.id} />
              </>
            )}
          </div>
        </Container>
      </ModalWrapper>
    </div>
  );
}
export default Html;
