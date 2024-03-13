import React from 'react';

export const User = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('hello');
    };

    return (
        <section>
            <div className="container">
                <div className="h-[70vh] flex items-center justify-center w-full">
                    <div className="rounded-lg px-8 py-6 max-w-md">
                        <h1 className="text-2xl font-bold text-center mb-4">Войти</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Электронный адресс</label>
                                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Введите свой эл.почту" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Пароль</label>
                                <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Введите свой пароль" required />
                                <a href="#"
                                    className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Забыть пароль</a>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" defaultChecked />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-500">Запомнить меня</label>
                                </div>
                                <a href="#"
                                    className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Регистрация</a>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
