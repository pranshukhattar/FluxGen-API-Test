const getData = () => {
    const loginUrl = 'https://aquzgenapi.azurewebsites.net/aquagen/v1/auth/login'
    const username = 'demouser'
    const password = ''
    fetch(loginUrl, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        }
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data.token
        })
        .then(token =>{
            const dataUrl = 'https://aquzgenapi.azurewebsites.net/aquagen/v1/industries/DEMO221249/water/consumption/graph?duration=thisweek&category_id=DEMO2202FC&timezone=Asia/Kolkata&startDate=1678991400&endDate=1679077800&token='
            fetch(dataUrl, {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            })
                .then(res => {
                    return res.json()
                })
                .then(result => {
                    console.log(result.data)
                })
        })
}

document.querySelector('#btn').addEventListener('click', getData)