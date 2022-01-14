import React, { useState, createContext } from 'react'
import { useContext } from 'react';

const PostContext = createContext();

const PostProvider = props => {
    const [posts, setPosts] = useState([
        {
            title: "List of extra topics that assume you've covered the first two",
            category: "$300",
            id: 23749,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225586/black%20lives/pexels-gotta-be-worth-it-5214869_pdghiq.jpg',
             comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "There is no clear hierarchy here, you can read",
            category: "$400",
            id: 232314,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225583/black%20lives/obi-onyeador-zSl8Di_N_9U-unsplash_u9cpzz.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "Post three",
            category: "$500",
            id: 237849,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225580/black%20lives/pexels-august-de-richelieu-4262424_a4s4gq.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "List of extra topics that assume you've covered the first two",
            category: "$300",
            id: 23712149,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225577/black%20lives/pexels-armin-rimoldi-5304818_gkmkal.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "There is no clear hierarchy here, you can read",
            category: "$400",
            id: 23289314,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225576/black%20lives/raphael-lovaski-Lw-ahUKYhiY-unsplash_usjxej.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "Post three",
            category: "$500",
            id: 253787849,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225567/black%20lives/pexels-pixabay-270968_dttfd4.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "List of extra topics that assume you've covered the first two",
            category: "$300",
            id: 2379949,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225562/black%20lives/pexels-pixabay-161890_umogz6.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "There is no clear hierarchy here, you can read",
            category: "$400",
            id: 232354314,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225564/black%20lives/pexels-nappy-935948_mkhdw3.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "Post three",
            category: "$500",
            id: 237800949,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225566/black%20lives/giulia-pugliese-8Tlhru2gHXc-unsplash_om2pt2.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "List of extra topics that assume you've covered the first two",
            category: "$300",
            id: 2344749,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1610969609/black%20lives/video_zc2xxf.png',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "There is no clear hierarchy here, you can read",
            category: "$400",
            id: 232357614,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225558/black%20lives/unseen-histories-37tjLuKnBRs-unsplash_edtwxr.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        },
        {
            title: "Post three",
            category: "$500",
            id: 237123849,
            date: '12/02/21',
            content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
            image: 'https://res.cloudinary.com/dmixz7eur/image/upload/v1611225558/black%20lives/obi-onyeador-l-sGasz59a8-unsplash_sn6n8p.jpg',
            comments: [{
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }, {
                content: "Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP. We concentrate on the language itself here, with the minimum of environment-specific notes.",
                likes: 6,
                dislikes: 5,
                name: "Agu eunice",
                email: "aybamz181@gmail.com"
            }],
            likes: 3,
            dislikes: 5
        }
    ])
    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {props.children}
        </PostContext.Provider>
    )
}

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) throw new Error('usePostContext must be used in PostProvider');
    return context;
}

export default PostProvider;