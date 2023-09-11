import React from 'react';
import { useForm } from 'react-hook-form';

export default function TaskHookForm({ kisiler, submitFn }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    submitFn({
      id: Date.now(),
      title: data.title,
      assignee: data.assignee,
      status: 'yapılacak',
    });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Görev Başlığı</label>
          <input {...register('title', { required: true })} />
        </div>
        <div className="form-group">
          <label>Atanan Kişi</label>
          <select {...register('assignee', { required: true })}>
            {kisiler.map((kisi) => (
              <option key={kisi.id} value={kisi.id}>
                {kisi.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Görev Ekle</button>
      </form>
    </div>
  );
}
