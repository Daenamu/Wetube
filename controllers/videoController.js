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

export const postUpload = async(req, res) => {
    const {
        body: {title, description},
        file: {path}
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    })
    res.redirect(routes.videoDetail(newVideo.id))
}

export const videos = (req, res) => res.render("Videos", { pageTitle: 'Videos'});

export const videoDetail = async(req, res) => {
    const {
        params: {id}
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("VideoDetail", { pageTitle: 'Video Detail', video });
    } catch (error){
        res.redirect(routes.home);
    }
}
export const editVideo = (req, res) => res.render("EditVideo", { pageTitle: 'Edit Video'});

export const deleteVideo = (req, res) => res.render("DeleteVideo", { pageTitle: 'Delete Video'});