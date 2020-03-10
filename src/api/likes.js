const captureImgLike = (like) => {
    if (like) {
        return require('../../resouces/img/s2-checked.png');
    }
    return require('../../resouces/img/s2.png');
}

const clickLikePhoto = (likes, myLike) => {
    let qtdLikes = likes;
    myLike ? qtdLikes-- : qtdLikes++;

    return [!myLike, qtdLikes];
}

export {captureImgLike, clickLikePhoto};