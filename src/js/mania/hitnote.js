function HitNote(data)
{
    HitObject.call(this, data);

    this.column = Math.max(1, Math.min((this.position.x / Player.beatmap.columnSize + 1) | 0, Player.beatmap.keyCount)) - 1;

    this.endPosition = new Point(data);
    this.endTime = this.time;
}
HitNote.prototype = Object.create(HitObject.prototype);
HitNote.prototype.constructor = HitNote;
HitNote.id = 1;
Mania.prototype.hitObjectTypes[HitNote.id] = HitNote;
HitNote.prototype.calcY = function(y, scroll)
{
    return Mania.HIT_POSITION - (y - scroll) * Player.beatmap.scrollSpeed * 0.035;
};
HitNote.prototype.draw = function(scroll)
{
    Player.ctx.beginPath();
    Player.ctx.rect(this.position.x, this.calcY(this.position.y, scroll),
        Player.beatmap.columnWidth, Player.beatmap.columnWidth / 3);
    Player.ctx.fillStyle = this.color;
    Player.ctx.fill();
    Player.ctx.strokeStyle = '#ccc';
    Player.ctx.lineWidth = 1;
    Player.ctx.stroke();
};