function fetch(callback)
{
    console.log('start');
    callback()
}
function display()
{
    console.log('im callback')
}
fetch(display)
