function DarkTheme(){
    return (
        <style jsx global>{`
        :root {
            --background-color: black;
            --link-color: rgb(210, 129, 109);
            --text-color: white;
        }            
        `}</style>
    );
}

export default DarkTheme;