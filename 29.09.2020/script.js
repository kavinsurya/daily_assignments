setTimeout(function(){
    document.getElementById('time').innerText = 10;
    setTimeout(function(){
        document.getElementById('time').innerText = 9;
        setTimeout(function(){
            document.getElementById('time').innerText = 8;
            setTimeout(function(){
                document.getElementById('time').innerText = 7;
                setTimeout(function(){
                    document.getElementById('time').innerText = 6;
                    setTimeout(function(){
                        document.getElementById('time').innerText = 5;
                        setTimeout(function(){
                            document.getElementById('time').innerText = 4;
                            setTimeout(function(){
                                document.getElementById('time').innerText = 3;
                                setTimeout(function(){
                                    document.getElementById('time').innerText = 2;
                                    setTimeout(function(){
                                        document.getElementById('time').innerText = 1;
                                        setTimeout(function(){
                                            document.getElementById('div').innerHTML = '';
                                            document.getElementById('message').innerHTML = 'Happy Independence Day';
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);