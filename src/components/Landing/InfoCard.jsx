function InfoCard({ title, icon: Icon, content, bulletPoints = [] }) {
  return (
    <div className="bg-white p-6 rounded-xl hover:shadow-lg max-w-sm">
      {Icon && (
        <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-lg mb-4">
          <Icon /> {/* ✅ Render JSX here */}
        </div>
      )}

      <h3 className="text-xl mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>

      {bulletPoints.length > 0 && (
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span>✔</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default InfoCard;