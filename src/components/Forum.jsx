import React, { useState } from 'react';

function Forum() {
    const [posts, setPosts] = useState([
        { id: 1, author: 'John Doe', content: 'This is my first post!' },
        { id: 2, author: 'Jane Smith', content: 'Excited to join this forum.' },
    ]);
    const [newPost, setNewPost] = useState({ author: '', content: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPost.author && newPost.content) {
            setPosts((prev) => [
                ...prev,
                { id: prev.length + 1, ...newPost },
            ]);
            setNewPost({ author: '', content: '' });
        }
    };

    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Forum Posts</h2>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="mb-4 p-4 border-b border-gray-200">
                            <p className="font-bold">{post.author}</p>
                            <p>{post.content}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts yet.</p>
                )}
            </div>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Add a New Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="author"
                            value={newPost.author}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Your Post</span>
                        </label>
                        <textarea
                            name="content"
                            value={newPost.content}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                            required
                        />
                    </div>

                    <button className="btn btn-primary w-full" type="submit">
                        Add Post
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Forum;
