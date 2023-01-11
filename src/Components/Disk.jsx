import React, { useState, useEffect } from 'react';

function Disk({diskNum}) {
     const something={
          width:`${50+(diskNum*40)}px`,
          // "marginLeft":`-${25+(diskNum*20)}px`,
          background:"red"
     }
     const red={
          background:"red"
     }
     return ( 
          <div className='disk' style={something}></div>
      );
}

export default Disk;