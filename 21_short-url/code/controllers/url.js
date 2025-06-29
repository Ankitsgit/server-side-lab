const {nanoid} = require("nanoid");
const URL = require('../models/url')
async function handleGenerateNewShortURL(req , res){
    const shortID = nanoid(8);
    const body = req.body;
    // console.log(shortID);

    if(!body.url) return  res.status(400).json({error : 'url is required'});

    await URL.create({
        shortId : shortID,
        reditrectURL : body.url,
        visitHistory : []
   });

    return res.json({id : shortID})
}

async function handleGetAnalytics(req , res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId : shortId })
    return res.json({ 
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
}