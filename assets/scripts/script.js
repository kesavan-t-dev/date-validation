function show_date_time() {
    const now = new Date();
    document.getElementById("current_year").innerText = now.getFullYear();
    document.getElementById("current_month").innerText = now.getMonth()+1;
    document.getElementById("current_date").innerText = now.getDate();
    document.getElementById("current_hour").innerText = now.getHours();
    document.getElementById("current_minute").innerText = now.getMinutes();
    document.getElementById("current_seconds").innerText = now.getSeconds();
    document.getElementById("current_millisec").innerText = now.getMilliseconds();
    document.getElementById("local_date_time").innerText = now.toLocaleString();
    document.getElementById("utc").innerText = now.toUTCString();
    document.getElementById("utc_milliseconds").innerText = now.getUTCMilliseconds();
}

function reset_data() {
    const ids = [
        "current_year","current_month","current_date",
        "current_hour","current_minute","current_seconds",
        "current_millisec","local_date_time","utc","utc_milliseconds"
          ];

    for (let id of ids) {
        document.getElementById(id).innerText = "";
    }
}