export const heap = () => {
   const used = process.memoryUsage().heapUsed / 1024 / 1024;
   const word = `The script uses approximately ${Math.round(used * 100) / 100} MB`
   return word
}

export const responseSize = (data) => {
    return Buffer.byteLength(data, 'utf8');
}
