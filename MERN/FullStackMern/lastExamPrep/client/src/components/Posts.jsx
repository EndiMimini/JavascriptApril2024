import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Droppable } from './Droppable'
import { Draggable } from './Draggable'
import {DndContext} from '@dnd-kit/core';
const Posts = () => {
    const [draftPosts, setDraftPosts] = useState([])
    const [publishedPosts, setPublishedPosts] = useState([])
    const [archivedPosts, setArchivedPosts] = useState([])
    const [updated, setUpdated] = useState(false)

    const [parent, setParent] = useState(null);
    const draggable = (
        <Draggable id="draggable">
        Go ahead, drag me.
        </Draggable>
    );

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/drafts')
            .then(res => {
                console.log(res.data)
                setDraftPosts(res.data.results)
            })
        axios.get('http://localhost:8000/api/posts/posted')
            .then(res => {
                console.log(res.data)
                setPublishedPosts(res.data.results)
            })
        axios.get('http://localhost:8000/api/posts/archived')
            .then(res => {
                console.log(res.data)
                setArchivedPosts(res.data.results)
            })
        setUpdated(false)

    }, [updated])

    const publishPosts = (id) => {
        axios.patch(`http://localhost:8000/api/posts/${id}/posted`)
            .then(res => {
                setUpdated(true)

            })
    }

    const archivePost = (id) => {
        axios.patch(`http://localhost:8000/api/posts/${id}/archived`)
            .then(res => {
                setUpdated(true)

            })
    }
    const deletePost = (id) => {
        axios.delete(`http://localhost:8000/api/posts/${id}`)
            .then(res => {
                setUpdated(true)

            })
    }

  function handleDragEnd({over}) {
    console.log('this is dragged')
    setParent(over ? over.id : null);
  }
    return (
        <div>
             <DndContext onDragEnd={handleDragEnd}>
            {!parent ? draggable : null}
            <Droppable id="droppable">
                {parent === "droppable" ? draggable : 'Drop here'}
            </Droppable>
            </DndContext>
            

            <div className='px-2 nav bg-dark text-white justify-content-between align-items-center rounded-1'>
                <h1>All posts</h1>
                <Link className='text-decoration-none text-white' to={'/post/new'}>Create a new post</Link>
            </div>
            <div className='p-3 bg-light row'>
                <div className='col-lg-4'>
                    <h2 className='text-center'>Drafts</h2>
                    <ul>
                        {
                            draftPosts.map((post, i) => {
                                return (
                                    <div className='my-2' key={i}>
                                        <p className='text-capitalize'>{post.title}</p>
                                        <button className='btn btn-outline-success' onClick={() => publishPosts(post._id)}>Publish this post</button>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <h2 className='text-center'>Posted</h2>
                    <ul>
                        {
                            publishedPosts.map((post, i) => {
                                return (
                                    <div className='my-2' key={i}>
                                        <p className='text-capitalize'>{post.title}</p>
                                        <button className='btn btn-outline-danger' onClick={() => archivePost(post._id)}>Archive this post</button>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <h2 className='text-center'>Archived</h2>
                    <ul>
                        {
                            archivedPosts.map((post, i) => {
                                return (
                                    <div key={i}>
                                        <p className='text-capitalize'>{post.title}</p>
                                        <button className='btn btn-danger' onClick={() => deletePost(post._id)}>Delete this post</button>

                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Posts
