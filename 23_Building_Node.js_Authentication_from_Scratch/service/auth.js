// basically it is diary where i keep recording of sessionid and function to map it with correct user

const sessionIdToUserMap =new Map() // it is a hasmap



function setUser(id , user){
     sessionIdToUserMap.set(id,user);
}

function getUser(id){
   return sessionIdToUserMap.get(id);
}

module.exports={
    setUser,
    getUser,
};