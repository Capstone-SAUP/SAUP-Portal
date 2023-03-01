export function toggleStatus(approval) {
  return approval === 'Approved' ? 'Disapproved' : 'Approved';
}