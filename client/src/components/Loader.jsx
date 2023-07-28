import React from 'react';



const Loader = () => (
    <div role="status">
    <svg aria-hidden="true" className="inline w-20 h-20 mr-2 text-gray-200 fill-[#ffffff]" viewBox="0 0 100 101" fill="none" svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
<g>

    <circle cx="60" cy="55" r="4" fill="#ff4e98">
        <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s"/>
        <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s"/>
    </circle>
    <circle cx="60" cy="50" r="4" fill="#7842ff">
        <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s"/>
        <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s"/>
    </circle>
    <circle cx="50" cy="45" r="4" fill="#33f6ec">
        <animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s"/>
        <animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"/>
    </circle>
</g>
<g transform="translate(-15 0)">
    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#52b9ed" transform="rotate(90 50 50)"/>
    <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#59ff18">
        <animate attributeName="fill" from="#00cccc" to="#da0b73" dur="2s" repeatCount="indefinite" />
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.6s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"/>
    </path>
    <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#62f7ff" to="black" dur="2s" repeatCount="indefinite">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.8s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"/>
    <animate attributeName="fill" from="#00cccc" to="#da0b73" dur="2s" repeatCount="indefinite" alternate />
    
    </path>
</g>
</svg>
</div>

);

export default Loader;