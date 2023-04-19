const login = `
    SELECT 
    TOP 1
    a.CSTCO    AS cstCo 
    , a.CSTCL AS cstCl
    , a.CSTNA    AS cstNa
    , a.TAXNO    AS taxNo
    , a.CONFYN AS confYn
    , b.USERID AS userId
    , b.USERNA AS userNa
    , b.STATCO AS statCo
    , b.EMAIL  AS email
    , c.ROLEID AS roleId
    , d.ROLENA AS roleNa
    , e.USERID AS repId
    , e.USERNA AS repNa
    , a.REPTELNO AS repTelNo
    , b.TELNO AS telNo
    , e.BIZMSGYN AS bizMsgYn   
    , a.MNGNA AS mngNa
    , a.MNGHPNO AS mngHpNo
    , b.USEYN AS useYn
    , e.FAXNO as faxNo
    , a.USEYN as tmp1
    FROM DTPMCST a
    INNER JOIN DTPMUSER b ON a.CSTCO = b.CSTCO AND b.USEYN = 'Y'
    INNER JOIN DTPSROLEUSER c ON b.USERID=c.USERID AND c.USEYN = 'Y' AND c.ROLEID NOT LIKE 'C%'
    INNER JOIN DTPSROLE d ON c.ROLEID = d.ROLEID AND d.USEYN = 'Y'
    INNER JOIN DTPMUSER e ON b.CSTCO = e.CSTCO AND e.USEYN = 'Y'
    INNER JOIN DTPSROLEUSER f ON e.USERID = f.USERID AND f.ROLEID IN ('WH010','WH099','PC010','PC099','HP011','PH011') AND f.USEYN = 'Y'
    WHERE e.USERID= @userId
    AND b.PASSWORD = @password
    AND b.STATCO != 'DNY'
`

module.exports = {
    login
}