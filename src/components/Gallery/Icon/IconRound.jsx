

function IconRound() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.icon}>
                <TbHomeDollar />
            </div>
            <div style={{ marginLeft: 16, display: 'flex', flexDirection: 'column', textAlign: 'left', width: '200px', gap: '6px' }}>
                <span style={{ fontSize: 25, fontWeight: 800 }}>2025</span>
                <span style={{ fontSize: 13, color: 'rgb(170,170,170)' }}>Состоится сдача клубного поселка в эксплуатацию</span>
            </div>
        </div>
    )
}

export default IconRound;