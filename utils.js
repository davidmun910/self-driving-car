function lerp(A, B, t) {
    return A + ((B - A) * t);
} // Finds the spacing between A and A + B given t

function getIntersection(A, B, C, D) {
    const ttop = (D.x - C.x)*(A.y - C.y) - (D.y - C.y)*(A.x - C.x);
    const utop = (C.y - A.y)*(A.x - B.x) - (C.x - A.x)*(A.y - B.y);
    const bottom = (D.y - C.y)*(B.x - A.x) - (D.x - C.x)*(B.y - A.y);

    if (bottom != 0) {
        const t = ttop / bottom;
        const u = utop / bottom;
        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            return {
                x: lerp(A.x, B.x, t),
                y: lerp(A.y, B.y, t),
                offset: t
            }
        }
    }
    return null;
}

