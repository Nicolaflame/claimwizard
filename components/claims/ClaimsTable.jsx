<TableHead>
  <TableRow>
    {/* ... existing columns ... */}
    <TableCell>Amount</TableCell>
    <TableCell>Refund</TableCell>
    {/* ... existing columns ... */}
  </TableRow>
</TableHead>
<TableBody>
  {claims.map((claim) => (
    <TableRow key={claim.id}>
      {/* ... existing columns ... */}
      <TableCell>{formatCurrency(claim.amount)}</TableCell>
      <TableCell>
        {claim.status === 'Approved' ? formatCurrency(claim.amount) : ''}
      </TableCell>
      {/* ... existing columns ... */}
    </TableRow>
  ))}
</TableBody> 