import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try {
        const video_db = await Video.find({});
        res.render("home", { pageTitle: 'Home', video_db});
    } catch(error) {
        console.log(error);
        res.render("home", { pageTitle: 'Home', video_db: []});
    }
}

export const search = async(req, res) => {
    const {query: {term: searchingBy}} = req;
    const video_db = await Video.find({});
    res.render("Search", { pageTitle: 'Search', searchingBy, video_db});
}

export const getUpload = (req, res) => res.render("Upload", { pageTitle: 'Upload'});

export const postUpload = (req, res) => {
    const {body: {file, title, description}} = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(23113))
}

export const videos = (req, res) => res.render("Videos", { pageTitle: 'Videos'});

export const videoDetail = (req, res) => res.render("VideoDetail", { pageTitle: 'Video Detail'});

export const editVideo = (req, res) => res.render("EditVideo", { pageTitle: 'Edit Video'});

export const deleteVideo = (req, res) => res.render("DeleteVideo", { pageTitle: 'Delete Video'});