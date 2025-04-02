import React, { useState, useEffect } from 'react';
import VideoCarousel from './VideoCarousal';
import CreateButton from './createbutton';

const Right = () => {
    return(
        <div>
        <VideoCarousel></VideoCarousel>
        <CreateButton></CreateButton>
    </div>
    )
}
export default Right;