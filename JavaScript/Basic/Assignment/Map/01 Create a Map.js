let StudentMarks = new Map([
    ["Mahek",23],
    ["Aishwara",87],
    ["Ketki",90]

]);
for(const [Student,marks]of StudentMarks){
    console.log(`${Student}:${marks}`);
}