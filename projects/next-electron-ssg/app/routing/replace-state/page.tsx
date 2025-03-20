'use client';

export default function ReplaceStatePage() {
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(window.location.search);
    params.set('sort', sortOrder);
    window.history.replaceState(null, '', `?${params.toString()}`);
  }

  return (
    <div>
      <button onClick={() => updateSorting('asc')}>升序排序</button>
      <button onClick={() => updateSorting('desc')}>降序排序</button>
    </div>
  );
}
