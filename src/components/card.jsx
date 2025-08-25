import Button from "./button";

function Card({ title, desc, status, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 text-center space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <p className="text-xs mt-2 text-blue-600 font-medium">{status}</p>

      <div className="flex gap-2 mt-2">
        <Button variant="warning" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Hapus
        </Button>
      </div>
    </div>
  );
}

export default Card;