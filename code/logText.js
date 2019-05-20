// code taken from martinrobinson https://cycling74.com/forums/append-text-to-file/

function text(sometext)
{
    var f, date;
    date = new Date();
    f = new File("log.txt", "readwrite", "TEXT");
    if(f.isopen)
    {
        f.position = f.eof;
        f.writeline("Log ["+date+"]: "+sometext);
        f.close();

    }
}