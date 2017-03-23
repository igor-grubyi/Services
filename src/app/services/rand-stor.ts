export function randString( ALength: number): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < ALength; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text; 
}
